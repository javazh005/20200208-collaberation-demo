<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	version="3.1">
	<display-name>jspExercise</display-name>
	<welcome-file-list>

		<welcome-file>index.jsp</welcome-file>

		<welcome-file>default.jsp</welcome-file>
	</welcome-file-list>
	<servlet>
		<servlet-name>MyFirstServlet</servlet-name>
		<servlet-class>iii.servletjsp.SimpleServlet</servlet-class>

	</servlet>
	<servlet-mapping>
		<servlet-name>MyFirstServlet</servlet-name>
		<url-pattern>/FirstSimpleProgram</url-pattern>
	</servlet-mapping>
</web-app>

1111111111111111111111111111
