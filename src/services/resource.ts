import Resource from '../models/resource'
class ResourceService {
  async create() {
    let resource = new Resource({
      data: 'some data', 
    });
  
    let newResource = await resource.save()
    return newResource
  }
}

export default new ResourceService()