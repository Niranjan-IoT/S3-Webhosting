console.log("Website loaded from S3!");
document.querySelector('h1').style.cursor = 'pointer';
document.querySelector('h1').onclick = () => alert('Running on AWS S3!');