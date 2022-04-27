using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using VueLearning.ServiceInterface;

namespace VueLearning.ServiceModel
{
    [ServiceStack.Route("api/[controller]")]
    public class UsersController
    {
        private readonly UsersService _usersService;

        public UsersController(UsersService usersService) =>
            _usersService = usersService;

        [HttpGet]
        public async Task<List<User>> Get() =>
            await _usersService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return new NotFoundResult();
            }

            return user;
        }

        [HttpPost]
        public async Task<IActionResult> Post(User newUser)
        {
            await _usersService.CreateAsync(newUser);

            return new CreatedAtActionResult(nameof(Get), nameof(UsersController), new { id = newUser.UserId }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, User updatedUser)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return new NotFoundResult();
            }

            updatedUser.UserId = user.UserId;

            await _usersService.UpdateAsync(id, updatedUser);

            return new NoContentResult();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return new NotFoundResult();
            }

            await _usersService.RemoveAsync(id);

            return new NoContentResult();
        }
    }
}
