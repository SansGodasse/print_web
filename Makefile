URL=127.0.0.1:1987

start: browse
	php -S ${URL} -t public

browse:
	@echo ${URL}
