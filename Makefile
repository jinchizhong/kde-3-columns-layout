all: install

uninstall:
	rm -rf ~/.local/share/kwin/scripts/threecolumnslayout/

install: uninstall
	plasmapkg2 --type kwinscript -i .
