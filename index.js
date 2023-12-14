const faqData = [
    {
        question: "Can I customize the ingredients in my juice order?",
        answer: "While we're not handing out juice lab coats just yet, we're working on a customization feature to let you create your juice masterpiece. For now, dive into our expertly crafted blends that are like a canvas of flavors."
    },
    {
        question: "Are your juices suitable for people with dietary restrictions or allergies?",
        answer: "Our juices are the diet chameleons of the beverage world. We're friendly to various dietary preferences, but always do a quick ingredient check to make sure you're in the clear."
    },
    {
        question: "Are your juices made from organic ingredients?",
        answer: "You bet your beet they are! Our juices are like a proud parade of organic ingredients that are free from anything artificial. We're talking real veggies and fruits, straight from the earth to your glass."
    },
    {
        question: "How do you ensure the freshness of the juices you offer?",
        answer: "We've got freshness on lockdown! Our cold-press process is like a gentle hug for the ingredients, keeping nutrients intact and flavors vibrant. It's like bottling a garden breeze."
    },
    {   
        question: "What health benefits can I expect from consuming Orgoholic juices?",
        answer: "Get ready to give your body a high-five! Our juices are loaded with vitamins, minerals, and antioxidants, which can support everything from your immunity to your energy levels. It's like a wellness boost in every bottle."
    },
];

const faqsContainer = document.getElementById('FAQs-container');

faqData.map((item) => {

    let faqItem = document.createElement('article');
    faqItem.classList.add('faq-item');

    let markup = `
            <div class="item-question">
                <span class="question-text">${item.question}</span>
                <span class="arrows-container">
                    <span class="expand">+</span>
                    <span class="close">-</span>
                </span>
            </div>
            <div class="item-answer">
                <span>${item.answer}</span>
            </div>
    `;
    
    faqItem.innerHTML = markup;
    faqsContainer.append(faqItem);
});

const toggleButtons = document.querySelectorAll('.arrows-container');
    
toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const faqItem = e.currentTarget.parentElement.parentElement;
        faqItem.classList.toggle("show-answer");
    });
});