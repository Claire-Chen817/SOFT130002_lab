# Lab10 说明文档

## Exercise7

#### PDO

$pdo连上了art数据库

`$sql = "select * from Artists order by LastName";$result = $pdo->query($sql);` 从数据库中检索出通过姓氏排序的艺术家

展示出ArtistID和LastName的组合。

![pdo.png](\images\pdo.png)

#### mysqli

$connection 连接到art数据库

`mysqli_query($connection, $sql)` 执行针对art数据库的sql检索

取得关联数组后，再<select>中加入新的<option>

释放内存后，断开与数据库的连接

![mysqli.png](\images\mysqli.png)

## Exercise8

#### outputArtists()

检索出0~30位通过姓氏排序的艺术家。鼠标滑过或者被选中，类名加一个active，样式改变。

#### outputPaintings()

通过被选中艺术家id检索其作品，并通过`outputSinglePainting($row) ` 呈现出来

#### outputSinglePainting()

在HTML文件中添加放置作品的结构

![8.png](\images\8.png)

## Exercise9

#### the way to execute sql code

1. DriverManager:用于管理JDBC驱动的服务类。主要功能是获取Connection对象。
2. Connection:代表数据库连接对象，每个Connection代表一个物理连接会话。
3. Statement:用于执行SQL语句的工具接口。常用方法：
4. PrepareStatement: 为Statement的子接口，可预编译SQL 语句，常用语执行多条结构相同，仅值不同的SQL 语句

#### the advantage of using Prepared Statements

1. PreparedStatement预编译SQL语句，性能更好，执行更快。

2. PreparedStatement无须“拼接”SQL 语句，编程更简单。

3. PreparedStatement可以防止SQL 注入（如将输入的true当成直接量，导致判断直接通过，从而降低了安全性），安全性更好。
   