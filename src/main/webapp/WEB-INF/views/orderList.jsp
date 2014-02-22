<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>	
	<head>
		<meta charset="UTF-8">
		<title>Order System</title>
		<link rel="stylesheet" href="css/bootstrap.min.css">
	</head>
	<body>
		<div id="order-list-container" class="container">
			<h1>Order List</h1>
			<hr />
			<a href="/order-frontend" class="btn btn-primary">Refresh</a>
			<div class="page"></div>
		</div>
		<script data-main="<c:url value='/js/main'/>" src="<c:url value='/js/require.js'/>"></script>
	</body>
</html>
