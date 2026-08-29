# Tabletop Simulator 연동 메모

림.딱 빌더에서 만든 덱을 Tabletop Simulator 스크립트가 읽을 수 있도록 별도 코드와 카드 매핑 파일을 사용한다.

현재 권장 방식은 카드를 새로 생성하는 방식이 아니라, 맵 안에 미리 놓아둔 원본 카드를 코드네임으로 찾아 복제하는 방식이다.

원본 카드는 테이블에 펼쳐두거나, Scripting Zone 안에 있는 가방에 넣어둘 수 있다.

## 덱 코드

웹에서 복사하는 TTS 코드는 `LTTS1` 접두사를 사용한다.

예시:

```text
LTTS1|F:1-I-2|B:5-I-3|M:1-B-1x2,1-C-2-1,5-C-3-2|E:1-E-2|U:5-U-3-1
```

필드:

- `F`: 전방 인격 코드네임.
- `B`: 후방 인격 코드네임.
- `M`: 20장 메인 덱. 같은 카드는 `코드x수량`으로 압축한다.
- `E`: 선택한 EGO. 없으면 생략한다.
- `U`: 선택한 강화카드. 없으면 생략한다.
- `A`: 인격/카드에서 추가로 필요한 키워드, 스택, 상태 같은 부속 카드. 없으면 생략한다.

설명, 덱 이름, 중심 키워드처럼 테탑시에서 카드 생성에 필요 없는 정보는 넣지 않는다.

## 카드 매핑

`data/tts-card-map.json`은 코드네임과 앱 카드 id, 이미지 경로를 연결한다.

생성 명령:

```powershell
npm run tts:map
```

출력 예시:

```json
{
  "version": 1,
  "cards": [
    {
      "code": "1-B-1",
      "id": "yi_sang_base_1",
      "type": "base",
      "image": "assets/sinners/yi_sang/base/01.png"
    }
  ]
}
```

## 원본 카드 저장소 방식

`tts/lt-deck-importer.lua`는 맵 안의 Scripting Zone에 들어있는 원본 카드들을 읽는다.

현재 임시 테스트 원본 Zone GUID:

```text
90ab8e
```

원본 카드 조건:

- 원본 카드는 맵 어딘가에 한 장씩 존재해야 한다.
- 원본 카드 이름, 설명, GM Notes 중 하나에 코드네임을 넣는다.
- 코드네임은 `[1-B-1]`처럼 대괄호로 감싸면 가장 안전하다.
- 카드 `Name`에는 `K-7`처럼 코드네임만 적어도 된다.
- 원본 카드들을 Scripting Zone 하나로 감싼다.
- 원본 카드를 가방에 넣는 경우, 그 가방이 Scripting Zone 안에 있으면 된다.
- 그 Scripting Zone GUID를 `CONFIG.sourceZones`에 넣는다.

카드 이름이나 GM Notes를 직접 수정하기 어렵다면, 스크립트의 임시 태깅 함수를 사용한다.

이 방식의 장점:

- 카드 이미지 URL이나 Custom Deck 번호를 웹 쪽에서 다시 만들 필요가 없다.
- 테탑시 맵에 이미 있는 카드 물리 상태를 그대로 복제할 수 있다.
- 카드가 추가되어도 새 원본 카드에 코드네임만 붙이면 된다.

## 지금 사용자가 해줘야 하는 것

Codex가 직접 확인하기 어려운 부분은 테탑시 맵 안의 실제 GUID뿐이다.

1. 원본 카드들을 모아둘 Scripting Zone을 만든다.
2. 그 Scripting Zone GUID를 알려준다.
3. 카드가 놓일 위치가 마음에 안 들면 대략적인 배치 위치를 알려준다.

나머지 코드 파싱, 누락 카드 감지, 카드 복제 배치는 스크립트가 처리한다.

## 임시 테스트

원본 Zone에 키워드와 EGO만 들어있는 상태에서는 완성 덱 가져오기 대신 테스트 함수를 쓴다.

Global Lua에 `tts/lt-deck-importer.lua` 내용을 붙이고 저장 및 실행한 뒤, 아래처럼 실행한다.

먼저 Zone 안 카드가 어떤 순서로 잡히는지 확인한다. `onLoad`에서는 로딩 직후 오브젝트가 아직 덜 잡힐 수 있으므로 `AfterLoad` 함수를 쓴다.

```lua
inspectLtSourceZoneAfterLoad()
```

출력 순서가 화면에서 보이는 카드 순서와 맞으면 코드네임을 자동으로 붙인다.

```lua
tagLtCardsByZoneOrder("K-1,K-2,K-3,K-4,K-5,K-6,K-7,K-8,1-E-1,2-E-1")
```

그 다음 복제 테스트를 실행한다.

```lua
testCloneLtCardsAfterLoad("K-1,K-2,K-8,1-E-1")
```

같은 카드를 여러 장 테스트하려면 `x수량`을 붙인다.

```lua
testCloneLtCardsAfterLoad("K-1x2,1-E-1")
```

찾지 못한 카드가 있으면 콘솔에 누락 코드가 출력된다.

가방 안 카드를 테스트할 때도 같은 함수를 쓴다.

```lua
testCloneLtCardsAfterLoad("K-7")
```

가방 안 카드가 정상 인식되면, 스크립트는 카드를 잠깐 꺼내 복제한 뒤 원본을 다시 가방에 넣는다.

가방 안 실제 카드 수와 `림.딱 원본 카드 인덱스` 수가 다르면 아래 함수를 쓴다.

```lua
inspectLtSourceProblemsAfterLoad("1-B-1,1-B-2,2-I-1")
```

이 함수는 코드네임 없는 원본, 중복 코드네임, 입력 목록에서 찾지 못한 코드를 출력한다.

## 다음 단계

1. 테탑시 안에서 `LTTS1` 코드를 파싱한다.
2. Scripting Zone 안의 원본 카드에서 코드네임을 읽어 인덱스를 만든다.
3. `M`은 수량만큼 복제하고, `E`, `U`, `A`는 20장 덱 밖 별도 영역에 둔다.
4. 전방/후방 인격은 덱 카드와 분리해서 지정된 위치에 둔다.

테탑시 쪽 원본 카드 저장소 GUID가 정해지면, `tts/lt-deck-importer.lua`의 `CONFIG.sourceZones`에 넣으면 된다.

## 실제 덱 테스트

이상~료슈 범위 코드네임을 넣은 상태라면 `tts/sample-ltts-yi-sang-ryoshu.txt`의 코드를 `LT_DECK_CODE`에 붙이고 아래처럼 실행한다.

```lua
function onLoad()
  importLtDeckCodeAfterLoad()
end
```

전방/후방 인격, 20장 메인 덱, `A:` 부속 카드가 각각 배치되면 성공이다.

## 카드 한 장 꺼내기

`DECK CODE` 입력칸에 덱 코드 또는 카드 코드네임 하나를 넣고 `덱 불러오기`를 누른다. 카드 코드네임 하나만 입력하면 해당 카드 한 장이 가방 옆에 복제된다. 가방 속 원본은 유지된다.

## 받은 피드백

- 우클릭으로 카드 빼기 기능 필요.
- `A B B A`처럼 추가해도 같은 카드끼리 모이도록, 덱 코드 또는 테탑시 배치 단계에서 순서 자동 조정 필요.
