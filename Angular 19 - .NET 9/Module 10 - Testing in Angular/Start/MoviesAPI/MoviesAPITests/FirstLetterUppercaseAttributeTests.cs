using MoviesAPI.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesAPITests
{
    [TestClass]
    public sealed class FirstLetterUppercaseAttributeTests
    {
        [TestMethod]
        [DataRow("Felipe")]
        [DataRow("")]
        [DataRow("      ")]
        [DataRow(null)]
        public void IsValid_ShouldReturnSuccess_WhenValueIsEmptyOrNullOrIsAWordThatStartsWithUppercase(string value)
        {
            // Preparation
            var firstLetterUppercaseAttribute = new FirstLetterUppercaseAttribute();
            var validationContext = new ValidationContext(new object());

            // Testing
            var result = firstLetterUppercaseAttribute.GetValidationResult(value, validationContext);

            // Verification
            Assert.AreEqual(expected: ValidationResult.Success, actual: result);
        }

        [TestMethod]
        [DataRow("felipe")]
        public void IsValid_ShouldReturnFail_WhenValueStartsWithLowercase(string value)
        {
            // Preparation
            var firstLetterUppercaseAttribute = new FirstLetterUppercaseAttribute();
            var validationContext = new ValidationContext(new object());

            // Testing
            var result = firstLetterUppercaseAttribute.GetValidationResult(value, validationContext);

            // Verification
            Assert.AreEqual(expected: "The first letter should be uppercase", actual: result!.ErrorMessage);
        }




    }
}
