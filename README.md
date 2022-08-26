# Mini Project - Student MAnagement

react-router-dom
@types/react-router-dom

/login
/admin: layout

/admin/*
feature: /admin/dashboard
feature: /admin/students

auth/authentication
- login
- sign up / register
- forget password


CLICK LOGIN
- Call API to login
- Success -> redirect ADMIN
- FAILED -> show ERROR

authSaga

LOOP
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- Call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
 redirect to login page