function toggleForm()
    {
        var container = document.querySelector('.container');
        container.classList.toggle('active')
    }
document.querySelector('.button').onclick = function()
{
    var name=document.querySelector(".name").value;
    var rollnumber=document.querySelector(".rollnumber").value;
    var email=document.querySelector(".email").value;
    var password=document.querySelector('.password').value,
        confirmPassword=document.querySelector('.confirmPassword').value;
        if(name.length < 5)
        {
            alert("please Enter valid name");
        }
        if(subject.length < 7)
        {
            alert("please enter valid rollnumber");
        }
        if(email.index("@")==-1 || email.length < 6)
        {
            alert("please enter valid id");
        }
        if(password == "")
        {
            alert("Field cannot be empty");
        }
        else if(password != confirmPassword)
        {
            alert("Password didn't match try again");
            return false;
        }
        else if(password == confirmPassword)
        {
            alert("Password Match");
        }
        alert("Succesfully Registered it will direct you to Login page");
        return true;
}
