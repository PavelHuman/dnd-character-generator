# dnd-character-generator

D&D character generator.

## Правила и бизнес-логика

[Player's Hand Book](https://drive.google.com/file/d/1ok1PpiE7tSGOw8LsRX9kV4i6VCKf_gRZ/view?usp=sharing)

[Basic Rules](https://dnd.wizards.com/articles/features/basicrules)

## How to resolve issue?

в зависимости от типа ишью добавить префикс к имени ветки (feature|bugfix)

1. Создать новую ветку c `master`, например `feature/add-entity`

    ```shell
    git checkout master
    git checkout -b feature/add-entity
    ```

2. сделать инит коммит (создать директорию или файл в котором предполагается сделать изменения)

    ```shell
    git add .
    git commit -m 'init commit'
    ```

3. запушить её на гитхаб

    ```shell
    git push -u origin feature/add-entity
    ```

4. [создать пуллреквест](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) `master <- feature/add-entity`
5. [привязать ветку к этому ишью](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)

***

[гайд по гиту](https://www.youtube.com/watch?v=bkNCylkzFRk&list=PL0lO_mIqDDFUesRNkeg46TDd5I6r7p2PI)

## Description

Ваша команда разрабатывает проект mmorpg на базе правил настольной игры Dungeons & Dragons.

И Вы вызвались разрабатывать фичу генерации персонажей.

(С концептом базовых правил D&D можно ознакомиться по ссылке https://dnd.wizards.com/articles/features/basicrules)


Бизнес-логика:

У каждого персонажа есть набор уникальных свойств, которые применяются к нему в процессе создания
процесс создания персонажа пока состоит из трёх этапов (Расы, Класса, Биографии)

Необходимо программно смоделировать создание персонажей по минимально предоставленному датасету
от пользователя (раса, подраса, класс, пол и возраст). Выделить этапы создания персонажей на основе вводных данных.
Чтобы после выполнения каждого этапа в консоль выводилась информация о персонажах на текущем этапе (вывести в консоль текущий инстансы персонажей)

Остальные недостающие характеристики персонажей должны достраиваться исходя из правил и должны применятся случайным образом
в рамках указанных правилами модификаторов



Технический комментарий:

1. Пусть класс Существо (Entity) будет самым базовым и содержит самые общие признаки, относящиеся к существу.
Вводятся базовые признаки Существа
- определяются базовые характеристики для существа (STR DEX CON WIS INT CHA)
- уровень существа и т.д.

2. Расширить (отнаследовать) класс расы (например Dwarf) от класса существа (Entity), расширив
его нужными свойствами и поведением присущие всем существам этой рассы

3. Расширить (отнаследовать) класс Fighter от класса Dwarf.
