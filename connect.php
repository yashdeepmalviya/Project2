<?php
	$userName = $_POST['userName'];
	$address = $_POST['address'];
	$plan = $_POST['plan'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$number = $_POST['number'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(userName, address, plan, email, password, number) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $userName, $address, $plan, $email, $password, $number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Thank you! Registration Successful....";
		$stmt->close();
		$conn->close();

		//header("Location: http://localhost/website/index.html");



	}
?>