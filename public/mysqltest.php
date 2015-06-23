<?
		echo "test script<br/>";
        $connect=mysql_connect("localhost","darcyg","buddha4040sd") or die("Unable to Connect");
        mysql_select_db("darcyg_sunset_main") or die("Could not open the db");
        $showtablequery="SHOW TABLES FROM dbname";
        $query_result=mysql_query($showtablequery);
        while($showtablerow = mysql_fetch_array($query_result))
        {
        echo $showtablerow[0]." ";
        } 
        ?>