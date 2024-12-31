export function getAutoResponse(input: string): string {
  const normalizedInput = input.toLowerCase();
  
  if (normalizedInput.includes('preço') || normalizedInput.includes('valor')) {
    return "O valor será apresentado na página oficial após o cadastro. Garantimos o melhor preço do mercado!";
  }
  
  if (normalizedInput.includes('entrega') || normalizedInput.includes('prazo')) {
    return "A entrega é realizada em todo Brasil! O prazo exato será informado na página de vendas oficial.";
  }
  
  if (normalizedInput.includes('pagamento')) {
    return "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto e Pix. Todos os detalhes na página oficial!";
  }
  
  if (normalizedInput.includes('material') || normalizedInput.includes('kit')) {
    return "Nosso kit inclui todos os materiais essenciais para o ano letivo! A lista completa está disponível na página de vendas.";
  }

  return "Para mais informações, complete seu cadastro e acesse nossa página oficial de vendas!";
}