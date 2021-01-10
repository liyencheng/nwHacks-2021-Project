
 class activityInfo{

    constructor(frequency,source,name){
        this.name=name;
        this.frequency = frequency;
        this.source = source;
    }
}

class ActivityGroup{
    constructor(array){
        this.heap = this.buildHeap(array);
    }

    swap(array,i,j){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    
    buildHeap(array){
        for(let i=Math.floor((array.length-2)/2);i>=0;i--)
            this.siftDown(array,i,array.length-1);
        return array;
    }

    siftDown(activities,currentActivity,lastActivity){

        while(true){
            var leftChild = 2*currentActivity+1;
            var rightChild = 2*currentActivity+2;
            if(!(currentActivity<leftChild && leftChild<=lastActivity))break;
            var activityToSwap = leftChild;
            if(currentActivity<rightChild && rightChild<=lastActivity){
                if(activities[leftChild].frequency<activities[rightChild].frequency){
                    activityToSwap = rightChild;
                }
            }
          
            if(activities[activityToSwap].frequency>activities[currentActivity].frequency){
                this.swap(activities,activityToSwap,currentActivity);
                currentActivity = activityToSwap;
            }
            else break;

        }
    }


    siftUp(startIdx,endIdx,array){
        while(true){
            var parent =  endIdx%2!==0 ? Math.floor((endIdx-1)/2) : Math.floor((endIdx-2)/2);
            if(parent<0)
                break;

            if (array[parent].frequency<array[endIdx].frequency){
                this.swap(array,parent,endIdx);
                this.siftDown(array,parent,array.length-1);
                endIdx=parent;
            }
            else
                break;
        }
    }


    removeActivity(){
       var activitySelected = this.heap[0];
       this.heap[0]=this.heap[this.heap.length-1];
       this.heap.pop();
       this.siftDown(this.heap,0,this.heap.length-1);
       return activitySelected;

    }

    addActivity(newActivity){
        this.heap.push(newActivity);
		this.siftUp(0,this.heap.length-1,this.heap);
    }


}


class ActivitySelection{

    constructor(sadActivities,angryActivities,stressedActivities,demotivatedActivities){
      this.allActivities = [sadActivities,angryActivities,stressedActivities,demotivatedActivities];
      this.allActivityMaps = [new Map(),new Map(),new Map(),new Map()];
    
      for(var i=0;i<4;i++){
          for(var j=0;j<this.allActivities[i].length;j++){
              
              this.allActivityMaps[i].set(this.allActivities[i][j].source,this.allActivities[i][j]);
             
          }
      }
      
      this.emotions = [new ActivityGroup(sadActivities),new ActivityGroup(angryActivities),new ActivityGroup(stressedActivities),new ActivityGroup(demotivatedActivities)];
    }
    
    suggestTopKActivities(emotionIdx){
        var userEmotion =   emotionIdx ;  //document.getElementById("userEmotion");   //index for the emotions array
        var userActivities = this.emotions[userEmotion];
        var activitiesToSuggest = [];
        var count = 0;
        for(var i=0;i<5;i++){                                      // by default top 10 activities are chosen to suggest
             if(userActivities.heap.length===0)break;
             var activitySelected = userActivities.removeActivity();
            
             activitiesToSuggest.push(activitySelected);   
             count+=1;
        }

        for(var j=0;j<count;j++){
            userActivities.addActivity(activitiesToSuggest[j]);
            activitiesToSuggest[j] = [activitiesToSuggest[j].source,activitiesToSuggest[j].name];
        }
        
        return activitiesToSuggest;
    }

    activitySelected(source,userEmotion){
         this.allActivityMaps[userEmotion].get(source).frequency+=1
         this.emotions[userEmotion].heap=this.emotions[userEmotion].buildHeap(this.emotions[userEmotion].heap)
         return this.suggestTopKActivities(userEmotion);
         //var s=this.emotions[userEmotion].heap;
        //  for(var i=0;i<s.length;i++){
        //      console.log(s[i].source,s[i].frequency);
        //  }
         //window.location = source;
         
    }


}

export default function getActivitiesObject(){
    var ac = new ActivitySelection([new activityInfo(0,"http://www.planetofsuccess.com/blog/2019/uplifting-depression-quotes/","Uplifting Quotes"),new activityInfo(0,"https://www.mindbodygreen.com/0-15367/15-quotes-that-lifted-me-up-when-i-was-depressed.html","lift-me-up when i'm depressed"),new activityInfo(0,"https://www.calmsage.com/songs-to-help-with-depression-and-anxiety/","songs for depression"),new activityInfo(0,"https://themighty.com/2017/08/depression-songs-at-night/","songs for depression (Night)"),new activityInfo(0,"https://www.youtube.com/watch?v=PppkNH3bKV4","Don't be sad video"),new activityInfo(0,"https://www.youtube.com/watch?v=z6EchXyieos","Funniest Animals Video"),new activityInfo(0,"https://www.youtube.com/watch?v=-Z4jx5VMw8M","Cat Can't Handle the Flower")],
    [new activityInfo(0,"https://www.outofstress.com/calming-quotes-for-anger/","Calming-Quotes"),new activityInfo(0,"https://wisdomquotes.com/anger-quotes/","Anger Quotes"),new activityInfo(0,"https://www.youtube.com/watch?v=fgkqLWg2B9o","Mindfulness-Meditation"),new activityInfo(0,"https://www.youtube.com/watch?v=oOBJ-sIw4W8","Cute Baby Animals"),new activityInfo(0,"https://www.youtube.com/watch?v=lylpnpNGA14","Cute Baby Animals"),new activityInfo(0,"https://www.healthline.com/health/anger-management-exercises#exercises","Anger Management Excercises"),new activityInfo(0,"https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434","Anger-Management Tips")],
    [new activityInfo(0,"https://www.lollydaskal.com/leadership/100-motivational-quotes-that-will-relieve-your-stress/","Quotes to Relieve Stress"),new activityInfo(0,"https://www.success.com/19-calming-quotes-to-help-you-stress-less/","Calming Quotes"),new activityInfo(0,"https://www.health.harvard.edu/staying-healthy/exercising-to-relax","Excercise tips"),new activityInfo(0,"https://www.youtube.com/watch?v=SkgTxQm9DWM","Nyan-Cat"),new activityInfo(0,"https://www.youtube.com/watch?v=lTRiuFIWV54","Lo-Fi beats1"),new activityInfo(0,"https://www.youtube.com/watch?v=XhugFMOf_SM","Lo-Fi beats2")],
    [new activityInfo(0,"https://www.lollydaskal.com/leadership/100-motivational-quotes-that-will-relieve-your-stress/","Quotes to Relieve Stress"),new activityInfo(0,"https://www.success.com/19-calming-quotes-to-help-you-stress-less/","Calming-Quotes"),new activityInfo(0,"https://www.health.harvard.edu/staying-healthy/exercising-to-relax","Excercise tips"),new activityInfo(0,"https://www.youtube.com/watch?v=SkgTxQm9DWM","Nyan-Cat"),new activityInfo(0,"https://www.youtube.com/watch?v=lTRiuFIWV54","Lo-Fi beats1"),new activityInfo(0,"https://www.youtube.com/watch?v=XhugFMOf_SM","Lo-Fi beats2")]);
    return ac;
}


// var ac = new ActivitySelection([new activityInfo(0,"l1"),new activityInfo(0,"l2")],[new activityInfo(0,"l3"),new activityInfo(0,"l4")],[new activityInfo(0,"l5"),new activityInfo(0,"l6")],[new activityInfo(0,"l7"),new activityInfo(0,"l8")]);
// var sa=ac.suggestTopKActivities()
// console.log(sa);
// ac.activitySelected(sa[1],0);





