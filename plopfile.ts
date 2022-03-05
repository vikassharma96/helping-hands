module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your component name?'
        },
        {
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'type',
            // Prompt to display on command line
            message: 'Please specify type (components/screens)?'
        },
      ],
      actions: [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/source/{{pascalCase type}}/{{pascalCase name}}/index.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        {
            type: 'add',
            path: 'src/__Test__/{{pascalCase type}}/{{pascalCase name}}.test.tsx',
            templateFile: 'plop-templates/Component.test.tsx.hbs',
        },
        {
            type: 'add',
            path: 'src/source/{{pascalCase type}}/{{pascalCase name}}/index.css',
            templateFile: 'plop-templates/Component.css.hbs',
        },
      ],
    });
  };
  