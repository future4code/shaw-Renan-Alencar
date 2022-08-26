import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import { useForm } from "../../Hooks/useForm";
import { Button, FormContainer, HeaderContainer, Input } from "./styled";

const Header = ({setUpdate, update}) => {

  const { form, onChange, clean } = useForm({
    first_name: "",
    last_name: "",
    participation: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    registerUser();    
  };

  const registerUser = async () => {
    axios
    .post( `${BASE_URL}/user/create`, form)
    .then((res) => {
      clean()
      setUpdate(!update)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  }

  const onlyNumber = (string) => {
    return string.replace(/[^0-9]/g, "");
  };

  return (
    <HeaderContainer>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          name="first_name"
          type={"text"}
          placeholder="First Name"
          value={form.first_name}
          onChange={onChange}
          required
        />
        <Input
          name="last_name"
          type={"text"}
          placeholder="Last Name"
          value={form.last_name}
          onChange={onChange}
          required
        />
        <Input
          name="participation"
          type={"number"}
          placeholder="Participation"
          value={form.participation}
          onChange={(event) => onChange(event, onlyNumber)}
          required
        />
        <Button type="submit">SEND</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
