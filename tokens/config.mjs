import StyleDictionary from 'style-dictionary';

// Transform personalizado para agregar "px" a números
const addPxTransform = {
  name: 'size/px',
  type: 'value',
  filter: (token) => {
    const types = ['spacing', 'borderRadius', 'borderWidth', 'fontSizes', 'lineHeights', 'sizing'];
    return types.includes(token.type);
  },
  transform: (token) => {
    const value = parseFloat(token.value);
    if (isNaN(value)) return token.value;
    return `${value}px`;
  }
};

const sd = new StyleDictionary({
  source: ['tokens/tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/tokens/',
      prefix: 'ds',
      transforms: ['attribute/cti', 'name/kebab', 'size/px', 'color/css'],
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables',
      }],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/tokens/',
      prefix: 'ds',
      transforms: ['attribute/cti', 'name/kebab', 'size/px', 'color/css'],
      files: [{
        destination: '_variables.css',
        format: 'css/variables',
      }],
    },
  },
});

// Registrar el transform
sd.registerTransform(addPxTransform);

// Build
await sd.buildAllPlatforms();
console.log('✅ Tokens generados con éxito');