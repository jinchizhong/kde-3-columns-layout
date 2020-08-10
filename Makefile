all: install

console:
	qdbus org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.showInteractiveKWinConsole

uninstall:
	rm -rf ~/.local/share/kwin/scripts/threecolumnslayout/

install: uninstall
	plasmapkg2 --type kwinscript -i .
