const fs = require('fs');

// Carrega o relatório JSON gerado pelo k6
const reportData = JSON.parse(fs.readFileSync('result.json', 'utf8'));

// Gera o conteúdo HTML do relatório
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Relatório de Teste de Carga</title>
</head>
<body>
  <h1>Relatório de Teste de Carga</h1>
  <h2>Resumo</h2>
  <p>Total de requests: ${reportData.metrics.http_reqs.count}</p>
  <p>Duração total: ${reportData.metrics.iterations.duration}</p>
  <!-- Adicione mais métricas conforme necessário -->
</body>
</html>
`;

// Escreve o conteúdo HTML no arquivo index.html
fs.writeFileSync('report/index.html', htmlContent);
