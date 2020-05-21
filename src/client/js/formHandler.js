function handleSubmit(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;

    if (Client.checkForURL(url)) {
        fetch("http://localhost:8081/api", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url})
        })
        .then(res => res.json())
        .then((res) => {
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('polarity-confidence').innerHTML = `Polarity Confidence: ${res.polarity_confidence}`;
            document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity Confidence: ${res.subjectivity_confidence}`;
        })
    } else {
        alert("Invalid URL. Try Again!")

    }
}

export { handleSubmit }