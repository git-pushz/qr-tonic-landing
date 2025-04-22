const fs = require('fs');
const path = require('path');

/**
 * Writes environment variables to the .env file
 */
function writeThemeToEnv(themeColors) {
  const envPath = path.join(process.cwd(), '.env');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent = envContent.replace(/THEME_PRIMARY=.*\n?/g, '');
    envContent = envContent.replace(/THEME_SECONDARY=.*\n?/g, '');
    
    if (!envContent.endsWith('\n')) {
      envContent += '\n';
    }
  }
  
  envContent += `THEME_PRIMARY='${themeColors.primary}'\n`;
  envContent += `THEME_SECONDARY='${themeColors.secondary}'\n`;
  
  fs.writeFileSync(envPath, envContent);
  
  process.env.THEME_PRIMARY = themeColors.primary;
  process.env.THEME_SECONDARY = themeColors.secondary;
}

module.exports = {
    stringifyData(jsonData) {
        return JSON.stringify(jsonData, null, 2);
    },
    writeThemeToEnv
};