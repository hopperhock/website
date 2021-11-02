const componentExists = require('../componentExist');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Functional',
      choices: () => ['Functional', 'React.Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'directory',
      name: 'path',
      message: 'Where you like to put this component?',
      basePath: './src',
    },
  ],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Functional': {
        componentTemplate = './component/functional.tsx.hbs';
        break;
      }
      case 'React.Component': {
        componentTemplate = './component/class.tsx.hbs';
        break;
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/{{path}}/{{properCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{path}}/{{properCase name}}/tests/index.spec.tsx',
        templateFile: `./component/test.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{path}}/{{properCase name}}/styles.tsx',
        templateFile: `./component/styles.tsx.hbs`,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};