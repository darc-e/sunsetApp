<?
		echo "test script<br/>";
        $connect=mysql_connect("localhost","sunsetm5","Mouldings1983!") or die("Unable to Connect");
        mysql_select_db("sunsetm5_sunset_main") or die("Could not open the db");
        echo " <br/>";
        $showtablequery="SHOW TABLES FROM sunsetm5_sunset_main";
        $query_result=mysql_query($showtablequery);
        while($showtablerow = mysql_fetch_array($query_result))
        {
        echo $showtablerow[0]." ";
        } 
        ?>