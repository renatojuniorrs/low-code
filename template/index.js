workEngine([
    {
        type: 'form',
        id: 'form',
        class: [
            'main-class'
        ],
        inner: [
            {
                type: 'h1',
                inner: 'Form'
            },
            {
                type: 'input',
                id: 'name',
                placeholder: 'Name',
            },
            {
                type: 'textarea',
                id: 'details',
                placeholder: 'Details',
            },
            {
                type: 'button',
                id: 'send',
                inner: 'Send',
                onclick: function () {
                    alert('Hey');
                }
            }
        ]
    }
], 'menu');