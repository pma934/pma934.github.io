/* img.txt 文件里面编写从又拍云获取的路径 要求所有图片的路径 一行一个*/
/* random.php 文件中的代码如下 复制粘贴即可 */
<?php
//存有美图链接的文件名img.txt
$filename = "img.txt";
if(!file_exists($filename)){
    die('文件不存在');
}
//从文本获取链接
$pics = [];
$fs = fopen($filename, "r");
while(!feof($fs)){
    $line=trim(fgets($fs));
    if($line!=''){
        array_push($pics, $line);
    }
} 
//从数组随机获取链接
$pic = $pics[array_rand($pics)]; 
//返回指定格式
$type=$_GET['type'];
switch($type){
//JSON返回
case 'json':
    header('Content-type:text/json');
    die(json_encode(['pic'=>$pic]));
default:
    die(header("Location: $pic"));
}
?>
