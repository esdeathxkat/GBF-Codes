//Selectable Element Host and Join
javascript: (function() {
    const elements = [
        { name: "光 (Light)", symbol: "光", id: 1 },
        { name: "水 (Water)", symbol: "水", id: 2 },
        { name: "風 (Wind)", symbol: "風", id: 3 },
        { name: "火 (Fire)", symbol: "火", id: 4 },
        { name: "土 (Earth)", symbol: "土", id: 5 },
        { name: "闇 (Dark)", symbol: "闇", id: 6 },
        { name: "Host", symbol: "主", id: 7 }
    ];
    let n = "Select an element:\n";
    for (let a = 0; a < elements.length; a++) {
        n += `- ${a + 1}: ${elements[a].name}\n`;
    }
    let selectedIndex = prompt(n);
    if (selectedIndex !== null && selectedIndex >= 1 && selectedIndex <= elements.length) {
        if (selectedIndex == 7) {
            let hostElementSelection = "What element are you playing as?\n";
            for (let a = 0; a < elements.length - 1; a++) {
                hostElementSelection += `- ${a + 1}: ${elements[a].name}\n`;
            }
            let selectedHostElementIndex = prompt(hostElementSelection);
            let symbolsToCopy = '';
                for (let i = 0; i < elements.length - 1; i++) {
                    if (i !== selectedHostElementIndex - 1) {
                        symbolsToCopy += elements[i].symbol + '\n';
                    }
                }
            if (selectedHostElementIndex !== null && selectedHostElementIndex >= 1 && selectedHostElementIndex <= 6) {
                const selectedElement = elements[selectedHostElementIndex - 1];
                const textArea = document.createElement('textarea');
                textArea.value = '主'+ selectedElement.symbol + ' @' + symbolsToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            } else {
                alert("Invalid selection. Please select a valid number.");
            }
        } else {
            const selectedElement = elements[selectedIndex - 1];
            const textArea = document.createElement('textarea');
            textArea.value = selectedElement.symbol;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    } else {
        alert("Invalid selection. Please select a valid number.");
    }
})();

//Quick Element Join
javascript: navigator.clipboard.writeText('闇');null;