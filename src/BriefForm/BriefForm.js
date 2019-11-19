import React from 'react';
import './style.css';


class BriefForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this. submitBriefForm = this.submitBriefForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitBriefForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["Title"] = "";
          fields["Comment"] = "";
          fields["ProductId"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["Title"]) {
        formIsValid = false;
        errors["Title"] = "*Please enter your Title.";
      }

     
      if (!fields["Comment"]) {
        formIsValid = false;
        errors["Comment"] = "*Please enter your comm.";
      }

     
      if (!fields["ProductId"]) {
        formIsValid = false;
        errors["ProductId"] = "*Please enter your ProdID";
      }
        
     this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div class="container">
     <div id="brief">
        <h3> Brief Form</h3>
        <form method="post"  name="BriefForm"  onSubmit= {this.submitBriefForm} >
        <label>Title</label>
        <input type="text" name="Title" value={this.state.fields.Title} onChange={this.handleChange} />
        <label>Comment:</label>
        <input type="text" name="Comment" value={this.state.fields.Comment} onChange={this.handleChange}  />
        <label>ProductID</label>
        <input type="text" name="ProductId" value={this.state.fields.ProductId} onChange={this.handleChange}   />
        
        <input type="submit" className="button"  value="Submit"/>
        </form>
    </div>
</div>

      );
  }


}


export default BriefForm;