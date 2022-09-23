// Fortemente acoplado ao serviço de envio de e-mail
public class Cliente
{
    public EnviaEmail (string email, string titulo, string mensagem)
    {
        var xpto = new XPTOEmailService();
        xpto.SendEmail(email, titulo, mensagem);
    }
}

//desacoplando com o uso do método interface injection
public interface IServicoEmail
{
    void EnviaEmail(string email, string titulo, string mensagem);
}

public class MyXPTOEmailService: IServicoEmail
{
    public EnviaEmail(string email, string titulo, string mensagem){
        var xpto = new XPTOEmailService();
        xpto.SendEmail(email, titulo, mensagem);
    }
}

public class MyXYZEmailService: IServicoEmail
{
    public EnviaEmail(string email, string titulo, string mensagem){
        var xyz = new XYZEmailService();
        xyz.SendEmail(email, titulo, mensagem);
    }
}

public class Cliente
{
    private IServicoEmail _servicoEmail;

    public Cliente(IServicoEmail servicoEmail)
    {
        _servicoEmail = servicoEmail;
    }

    public EnviaEmail(string email, string titulo, string mensagem)
    {
        _servicoEmail.EnviaEmail (email, titulo, mensagem);
    }
}