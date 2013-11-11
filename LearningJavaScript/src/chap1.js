/**
 * chapter 1. Hello JavaScript!
 * 
 * things learned:
 * 1. DOCTYPE has impact on script execution
 * 2. <script type="text/javascript"></script> the language attribute
 *    is deprecated
 * 3. defer attribute makes the script defered to just before onload event?
 * 4. add script to head secion improves readability, but add it to the bottom
 *    adds performance.
 * 5. use file for modularity
 * 6. Browser Object Model (BOM) is DOM Level 0
 * 7. var creates local variable, without var it is global
 * 8. to prevent inline script interfere with xhtml syntax, use CDATA section in comments
 *    // <![CDATA[
 *    	function xxx() {... < > !=}
 *    // ]]>
 * 9. use <noscript> to provide static content for safe
 */

function hello() {
	// say hello to the world
	var msg = "hello, <em>world!</em>";
	document.open();
	document.writeln(msg);
	document.close();
}
