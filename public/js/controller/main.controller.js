app.controller("main", ["$scope", function($scope){

  let dat = new Date();
  $scope.date = {

    minute: dat.getMinutes(),
    hour:   dat.getHours()

  }


  $scope.notes = [{},{
      author: "jeremias ramirez",
      title: "visit medic",
      noteNotes: "go to revision eyes",
      minutes: $scope.date.minute,
      hours: $scope.date.hour
    },
    {
        author: "Frankling nuse",
        title: "correr ",
        noteNotes: "correr por el olimpico",
        minutes: $scope.date.minute,
        hours: $scope.date.hour
      }]





  $scope.addNote = function(){

  }
  $scope.removed = function(key){

  }

  $scope.removeNote = function(key){

    // let iter = 0;
    // if (iter<1){
    //   iter++
      $scope.displayWindow()
        // $scope.notes.splice(key, key)

        let cancel = withId("buttonCancels")
        let ok = withId("buttonOks")

        ok.addEventListener("click", function(){

          alert("remoed")

        }, false);

        cancel.addEventListener("click", function(){

          alert("canceled")

        }, false);


      // }
  }

  $scope.removeds = function(){
    alert("button removed")
  }

  $scope.canceled = function(){
    alert("button canceled")
  }
  $scope.updateNote = function(){}

  $scope.displayWindow = function (){
    let container__window = document.createElement("div");
      container__window.setAttribute("class", "container__window in")
      container__window.setAttribute("id", "container__window")

    let buttonCancel = document.createElement("button");
      buttonCancel.setAttribute("class", "buttonCancels")
      buttonCancel.setAttribute("ng-click", "canceled()")
      buttonCancel.setAttribute("id", "buttonCancels")
      buttonCancel.textContent= "Cancel"
      container__window.appendChild(buttonCancel);


    let buttonOk = document.createElement("button");
      buttonOk.setAttribute("class", "buttonOks")
      buttonOk.setAttribute("ng-click", "removeds()")
      buttonOk.setAttribute("id", "buttonOks")
      buttonOk.textContent= "Remove"
      container__window.appendChild(buttonOk)
      document.body.appendChild(container__window);

  }

}])
