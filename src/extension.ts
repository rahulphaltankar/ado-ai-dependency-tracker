import * as azdev from 'azure-devops-node-api';  

export class AIDependencyTracker {  
  async createDependencyWorkItem(  
    projectId: string,  
    dependency: {  
      title: string,  
      type: string,  
      owner: string,  
      acceptanceCriteria: string  
    }  
  ) {  
    const orgUrl = "https://dev.azure.com/your-org";  
    const token = process.env.AZURE_TOKEN;  
    const authHandler = azdev.getPersonalAccessTokenHandler(token);  
    const connection = new azdev.WebApi(orgUrl, authHandler);  

    const workItemClient = await connection.getWorkItemTrackingApi();  
    const workItem = await workItemClient.createWorkItem(  
      [{ op: "add", path: "/fields/System.Title", value: dependency.title }],  
      projectId,  
      "AI Dependency"  
    );  
    return workItem;  
  }  
}  
