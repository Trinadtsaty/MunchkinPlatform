cd frontend
call npm run build
cd ..\server
go build -o ..\munchkin-platform.exe .
cd ..