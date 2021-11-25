<?php
$json = file_get_contents('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xd7f0cc50ad69408ae58be033f4f85d2367c2e468&address=0xce58b29302aaa2a961503bbf3dd06d6143021359&tag=latest&apikey=73BQPQTDSDBW8ASEEJ7G1YN1DSKXVTGY2T');
$obj = json_decode($json);
//echo "%" .  round( ( 1000000000 -  $obj->result/1000000000000000000 ) / 10000000, 2);
echo round(1000000000 -  $obj->result/1000000000000000000);
?>
