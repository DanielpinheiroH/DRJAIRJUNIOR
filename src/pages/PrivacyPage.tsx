import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEO } from '../components/seo/SEO';
import { clinicConfig } from '../config/clinic';

const breadcrumbs = [{ label: 'Política de Privacidade' }];

export default function PrivacyPage() {
  return (
    <>
      <SEO title="Política de Privacidade | Dr. Jair Júnior" description="Informações sobre dados, cookies, ferramentas de análise e direitos de privacidade relacionados ao site." canonical="/politica-de-privacidade" breadcrumbs={breadcrumbs} />
      <section className="internal-hero compact"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Privacidade</span><h1>Política de Privacidade</h1><p>Última atualização: 21 de julho de 2026.</p></div></section>
      <article className="section legal-content"><div className="container narrow">
        <div className="legal-warning"><strong>Revisão jurídica necessária</strong><p>Este texto é uma base informativa e deve ser revisado por profissional jurídico antes da publicação.</p></div>
        <h2>1. Informações coletadas</h2><p>Este site pode receber os dados que você decide inserir no formulário, como nome, telefone, e-mail, tratamento de interesse e mensagem.</p>
        <h2>2. Finalidade do uso</h2><p>Os dados são usados para preparar o contato solicitado, responder dúvidas e organizar o atendimento. O formulário atual abre uma mensagem no WhatsApp e não possui banco de dados próprio.</p>
        <h2>3. Dados enviados pelo formulário</h2><p>Ao concluir o envio no WhatsApp, os dados passam a ser tratados também conforme as políticas dessa plataforma. Revise a mensagem antes de enviá-la.</p>
        <h2>4. Cookies e análise</h2><p>O projeto está preparado para integração futura com ferramentas de análise. Nenhum identificador fictício foi configurado. Se ativadas, a política e o mecanismo de consentimento devem ser atualizados.</p>
        <h2>5. Compartilhamento</h2><p>Não há venda de informações. Dados poderão ser processados por fornecedores essenciais ao funcionamento e à comunicação, conforme as configurações efetivamente adotadas.</p>
        <h2>6. Segurança</h2><p>São adotadas medidas proporcionais à natureza do site, mas nenhum sistema pode garantir segurança absoluta. Evite enviar informações clínicas sensíveis pelo formulário.</p>
        <h2>7. Direitos do titular</h2><p>Você pode solicitar confirmação, acesso, correção, eliminação ou informações sobre o tratamento de seus dados, observadas as hipóteses legais aplicáveis.</p>
        <h2>8. Contato</h2><p>{clinicConfig.email ? `Solicitações podem ser enviadas para ${clinicConfig.email}.` : 'O canal de privacidade será publicado após a confirmação do e-mail responsável.'}</p>
      </div></article>
    </>
  );
}
