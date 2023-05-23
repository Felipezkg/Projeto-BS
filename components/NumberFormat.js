// Função para formatar data de nascimento (formato esperado: DD/MM/AAAA)
export const formatarDataNascimento = (data) => {
    if (!data) return '';
    const partes = data.split('-');
    if (partes.length !== 3) return data;
    const [ano, mes, dia] = partes;
    return `${dia}/${mes}/${ano}`;
  };
  
  // Função para formatar CPF (formato esperado: XXX.XXX.XXX-XX)
export const formatarCPF = (cpf) => {
    if (!cpf) return '';
    const partes = cpf.match(/.{1,3}/g);
    if (!partes) return cpf;
    return partes.join('.');
  };
  
  // Função para formatar número de telefone (formato esperado: (XX) XXXXX-XXXX)
export const formatarTelefone = (telefone) => {
    if (!telefone) return '';
    if (telefone.length === 11) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
    } else if (telefone.length === 10) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`;
    }
    return telefone;
  };
  
  // Exemplos de uso
  const dataNascimento = '1990-01-01';
  const cpf = '12345678901';
  const telefone = '11987654321';
  
  console.log(formatarDataNascimento(dataNascimento)); // Saída: 01/01/1990
  console.log(formatarCPF(cpf)); // Saída: 123.456.789-01
  console.log(formatarTelefone(telefone)); // Saída: (11) 98765-4321