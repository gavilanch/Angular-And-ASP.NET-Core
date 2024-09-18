using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class GenreDTO: IId
    {
        public int Id { get; set; }
        public required string Name { get; set; }
    }
}
