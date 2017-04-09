$(document).ready(function () {
    var str1;
    var strId = '';
    var testStr;
    var clickCounter = 0;
    function newQuote () {
        var quoteArr = ["Whatever the mind of man can conceive and believe, it can achieve.", "Strive not to be a success, but rather to be of value.", "Two roads diverged in a wood, and I - I took the one less traveled by, And that has made all the difference.", "I attribute my success to this: I never gave or took any excuse.", "You miss 100% of the shots you don't take.", "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", "The most difficult thing is the decision to act, the rest is merely tenacity.", "Every strike brings me closer to the next home run.", "Definiteness of purpose is the starting point of all achievement.", "Life isn't about getting and having, it's about giving and being.", "Life is what happens to you while you're busy making other plans.", "We become what we think about.", "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Life is 10% what happens to me and 90% of how I react to it.", "The most common way people give up their power is by thinking they don't have any.", "The mind is everything. What you think you become.", "The best time to plant a tree was 20 years ago. The second best time is now.", "An unexamined life is not worth living.", "Eighty percent of success is showing up.", "Your time is limited, so don't waste it living someone else's life.", "Every child is an artist.  The problem is how to remain an artist once he grows up.", "You can never cross the ocean until you have the courage to lose sight of the shore.", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Either you run the day, or the day runs you.", "Whether you think you can or you think you can't, you're right.", "The two most important days in your life are the day you are born and the day you find out why.", "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "The best revenge is massive success.", "People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily.", "Life shrinks or expands in proportion to one's courage."];
        var authorArr = ['Napoleon Hill', 'Albert Einstein', 'Robert Frost', 'Florence Nightingale', 'Wayne Gretzky', 'Michael Jordan', 'Amelia Earhart', 'Babe Ruth', 'W. Clement Stone', 'Kevin Kruse', 'John Lennon', 'Earl Nightingale', 'Mark Twain', 'Charles Swindoll', 'Alice Walker', 'Buddha', 'Chinese Proverb', 'Socrates', 'Woody Allen', 'Steve Jobs', 'Pablo Picasso', 'Christopher Columbus', 'Maya Angelou', 'Jim Rohn', 'Henry Ford', 'Mark Twain', 'Johann Wolfgang von Goethe', 'Frank Sinatra', 'Zig Ziglar', 'Anais Nin'];
        
        var randomSelector = Math.floor(Math.random()*quoteArr.length);
        str1 = quoteArr[randomSelector];
        $('#quote').html(quoteArr[randomSelector]);
        $('#author').html(authorArr[randomSelector]);
        alert('newQuote');
    }
    
    newQuote();
    newTwitterButton();
    
    
    function newTwitterButton () {
        var newTweet = document.createElement('a');
        newTweet.setAttribute('href', 'https://twitter.com/share');
        newTweet.setAttribute('class', 'twitter-share-button');
        newTweet.setAttribute('id', 'twitterButton');
        newTweet.setAttribute("data-text", str1);
        newTweet.setAttribute("data-count", "none");
        tweetdiv = document.getElementById('twitterContainer');
        tweetdiv.appendChild(newTweet);
        twttr.widgets.load();
        alert('TwitterButton');
    }
    
    function deleteTweet () {
        var twitterDelete = document.getElementById('twitterContainer');
        if (twitterDelete != null) {
            twitterDelete.parentNode.removeChild(twitterDelete);
            alert('deleteTweet');
        }
    }
    
    $('.new-quote-button').click(function () {
        clickCounter = clickCounter + 1;
        newQuote();
        newTwitterButton();
        alert('Onclick');
        if (clickCounter >= 1) {
            deleteTweet();
        }
    });
});