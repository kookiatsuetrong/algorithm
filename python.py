
def hangman(secretWord):
    print "Welcome to the game Hangman!"
    print "I am thinking of a word that is " + str(len(secretWord)) + " letters long"
    letters = "abcdefghijklmnopqrstuvwxyz"
    correct = False
    count = 8
    guessed = ''
    while not correct:
        print "------------"
        print "You have " + str(count) + " guesses left"
        print "Available letters: " + letters
        c = raw_input("Please guess a letter: ")
        c = c.lower()
        if c in letters:
            guessed += c
            letters = letters.replace(c, '');

            currentWord = ''
            for d in secretWord:
                if d in letters:
                    currentWord += '_ '
                else:
                    currentWord += d

            if c in secretWord:
                print "Good guess: " + currentWord
            else:
                count -= 1
                print "Oops! That letter is not in my word: " + currentWord

            corr = True
            for d in secretWord:
                if not d in guessed:
                    corr = False
            correct = corr
        else:
            currentWord = ''
            for d in secretWord:
                if d in letters:
                    currentWord += '_ '
                else:
                    currentWord += d

            print "Oops! You've already guessed that letter: " + currentWord
        if correct:
            print "-----------"
            print "Congratulations, you won!"
        if count == 0:
            print "-----------"
            print "Sorry, you ran out of guesses. The word was else."
            break;

hangman('apple');



















#
