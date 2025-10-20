const fields = document.querySelectorAll('#firstName, #lastName, #email');
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('focus', function() {
        this.style.backgroundColor = '#cce5ff'; // light blue when focused
    });

    fields[i].addEventListener('blur', function() {
        this.style.backgroundColor = ''; // return to default when unfocused
    });
}

