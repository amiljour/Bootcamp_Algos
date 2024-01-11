# /* 
# String: Is Palindrome

# Create a function that returns a boolean whether the string is a strict palindrome. 
#     - palindrome = string that is same forwards and backwards

# Do not ignore spaces, punctuation and capitalization
#  */

str1 = "a x a"
expected1 = True

str2 = "racecar"
expected2 = True

str3 = "Dud"
expected3 = False

str4 = "oho!"
expected4 = False

# /**
#    * Determines if the given str is a palindrome (same forwards and backwards).
#    * - Time: O(?).
#    * - Space: O(?).
#    * @param {string} str
#    * @returns {boolean} Whether the given str is a palindrome or not.
#    */
def isPalindrome(str):

    # Create anempty string to hold the backwards string
    backwards_string = ''

    # Create y to be str length - 1 to be the index
    y = len(str) - 1

    length = len(str)

    # Create a for loop to iterate throught the lenght of the string
    while index < len(str):
        # Adds the last letter to backwardsString
        backwardsString = backwardsString + str[y]
        # Minus 1 from y to get the next letter next time it goes through the str
        y -= 1

    # Creates a if statement to check if it is the same and if it its = it will return true and if its != it will return false
    if backwardsString == str:
        return True
    else:
        return False

print(isPalindrome(str1))
print(isPalindrome(str2))
print(isPalindrome(str3))