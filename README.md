Matic Test assignment
=======================

Our intent is to get a feel for your thought process as well as your source code organization and testability.

It's not required that you solve all of the problems / tasks in this document. We value your time and efforts. Feel free to skip any part of this assignment while still giving us a chance to enjoy the results of your work that best demonstrate your skills and code style.  

We would like to know the approximate time you spent on the solution. We do not take time of submission into account in our overall evaluation.

We expect to see source code as a git repository with instructions on how to use it.

*Please let us know if you have any questions.*

#### Task: Fetch ‘n’ Cache application

* The user should be able to fetch Rick and Morty characters. 
* If the character was fetched before, it should be loaded instantly. 
* If the data is not on the cache, the app should wait for the user to submit 
* Disable the buttons and search bar and when the network request is not yet complete 
* For each data on the cache, display buttons that users can click to load that data on the screen 
* Allow the user to clear the cache entirely 

#### BONUS tasks: 
* Allow the user to remove each data from the cache 
* While the user types in the input field, the app should be getting data from the cache on each change
* When the input field contains an id that is on the cache, instantaneously display the cached data on the screen
* The code is covered with automation tests

[Figma Mockups](https://www.figma.com/file/UeAY9vlFmBAqUoMb6H3n77/Matic-Test-Assignment%3A-Fetch-and-Cache?node-id=0%3A1)

<code>GET [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)<code>
