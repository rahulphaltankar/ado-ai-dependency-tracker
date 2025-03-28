import tl = require('azure-pipelines-task-lib/task');  

async function run() {  
  try {  
    const legalApproval = tl.getInput('legalApproval', true);  
    if (!legalApproval) {  
      tl.setResult(tl.TaskResult.Failed, 'Legal approval work item not linked.');  
    }  
  } catch (err) {  
    tl.setResult(tl.TaskResult.Failed, err.message);  
  }  
}  

run();  
