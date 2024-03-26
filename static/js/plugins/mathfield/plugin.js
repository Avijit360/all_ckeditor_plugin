CKEDITOR.plugins.add('mathfield', {


    icons:"mathfield",
    init: function(editor)
    {

        editor.ui.addButton('Mathfield',{

            label: "Insert Below math",
            command: "insertMathfield",
            toolbar:"insert"


        })  
        
        editor.addCommand('insertMathfield', {
           
                exec: function(editor) {
                    // Here, you would fetch the math-field data. Assuming it's available as a global variable or through a DOM element.
                    const mathField = document.getElementById("formula");
                    const latexValue = mathField.value; // Fetching the value from math-field
                    const wrappedContent = `<p><span class="math-tex">\\(${latexValue}\\)</span></p>`;
                    editor.insertHtml(wrappedContent);
                
            }
        })
    }



})