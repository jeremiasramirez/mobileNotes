app.controller("main", ["$scope", function($scope){



  $scope.showMax = 0;
  $scope.searchNote='';

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


      $scope.updateNote = function(key){

        $scope.displayUpdate(key);

      }



  $scope.removeNote = function(key){




        let cancel = withId("container__window")
        $scope.displayWindow()


      $scope.notes.splice(key, key)


  }



  $scope.displayUpdate = function(key){


          let containerUpdate = document.createElement("div");
            containerUpdate.setAttribute("class", "containerUpdate in")
            containerUpdate.setAttribute("id", "containerUpdate")


            let titleContainer = document.createElement("h1");
              titleContainer.setAttribute("class", "titleContainer text--orange in")
              titleContainer.setAttribute("type", "text")
              titleContainer.textContent = "Actualizar nota"
              titleContainer.setAttribute("id", "titleContainer")
              containerUpdate.appendChild(titleContainer)

              let containerRemove = document.createElement("div");
                containerRemove.setAttribute("class", " closeUpdate")
                containerRemove.setAttribute("id", "containerRemove")
                containerUpdate.appendChild(containerRemove)


                let close = document.createElement("span");
                  close.setAttribute("class", "fas fa-times closeUpdate")
                  close.setAttribute("id", "close")
                  containerRemove.appendChild(close)


            let inputAuthor = document.createElement("input");
              inputAuthor.setAttribute("class", "inputAuthor   in")
              inputAuthor.setAttribute("type", "text")
              inputAuthor.setAttribute("value", $scope.notes[key].author)
              inputAuthor.setAttribute("placeholder", "Author name")
              inputAuthor.setAttribute("id", "inputAuthor")
              containerUpdate.appendChild(inputAuthor)




              let inputTitle = document.createElement("input");
                inputTitle.setAttribute("class", "inputTitle  in")
                inputTitle.setAttribute("placeholder", "Title")
                inputTitle.setAttribute("value", $scope.notes[key].title)
                inputTitle.setAttribute("type", "text")
                inputTitle.setAttribute("id", "inputTitle")
                containerUpdate.appendChild(inputTitle)


                let description = document.createElement("textarea");
                  description.setAttribute("class", "description  in")
                  description.setAttribute("cols", "32")
                  description.setAttribute("rows", "5")
                  description.setAttribute("placeholder", "Description")
                  description.setAttribute("type", "text")
                  description.setAttribute("id", "description")
                  containerUpdate.appendChild(description)







              let buttonUpdate = document.createElement("button");
                buttonUpdate.setAttribute("class", "buttonUpdate btn--add minmin in")
                buttonUpdate.textContent = "Update"
                buttonUpdate.setAttribute("id", "buttonUpdate")
                containerUpdate.appendChild(buttonUpdate)




            document.body.appendChild(containerUpdate);

            let desc = withId("description")
              desc.textContent =$scope.notes[key].noteNotes

            let windowsUpdate = withId("containerUpdate")
            let closeUpdateWindow = withId("containerRemove")

            closeUpdateWindow.addEventListener("click", ()=>{
                windowsUpdate.remove();
            },false)



            let auth =withId("inputAuthor")
            let titl =withId("inputTitle")
            let descr = withId("description")



            let buttonUpd = withId("buttonUpdate")

            buttonUpd.addEventListener("click", function(){

              let wU = withId("containerUpdate")
              $scope.notes[key].author =  auth.value;
              $scope.notes[key].title =  titl.value;
              $scope.notes[key].noteNotes =  descr.value;

                setTimeout(()=>{
                  wU.remove();
                  $scope.showMax = 1;
                  $scope.$apply();

                },100)

                setTimeout(()=>{

                    $scope.showMax = 0;
                    $scope.$apply();
                },3000)



            }, false);





  }


  $scope.removeDisplay = function (){

    let windows = withId("container__window")


    if ( windows){
      windows.remove()
    }
  }
  $scope.displayWindow = function (){
        let container__window = document.createElement("div");
          container__window.setAttribute("class", "container__window in")
          container__window.setAttribute("id", "container__window")

          container__window.textContent = "Nota removida"
          document.body.appendChild(container__window);

          let windows = withId("container__window")
          setTimeout(()=>{windows.remove()},1000)


  }

  $scope.addNew = 0;
  $scope.addNote = function(){


              let containerUpdate = document.createElement("div");
                containerUpdate.setAttribute("class", "containerUpdate in")
                containerUpdate.setAttribute("id", "containerUpdate")


                let titleContainer = document.createElement("h1");
                  titleContainer.setAttribute("class", "titleContainer text--orange in")
                  titleContainer.setAttribute("type", "text")
                  titleContainer.textContent = "Agregar nota"
                  titleContainer.setAttribute("id", "titleContainer")
                  containerUpdate.appendChild(titleContainer)

                  let containerRemove = document.createElement("div");
                    containerRemove.setAttribute("class", " closeUpdate")
                    containerRemove.setAttribute("id", "containerRemove")
                    containerUpdate.appendChild(containerRemove)


                    let close = document.createElement("span");
                      close.setAttribute("class", "fas fa-times closeUpdate")
                      close.setAttribute("id", "close")
                      containerRemove.appendChild(close)


                let inputAuthor = document.createElement("input");
                  inputAuthor.setAttribute("class", "inputAuthor   in")
                  inputAuthor.setAttribute("type", "text")
                  // inputAuthor.setAttribute("value", $scope.notes[key].author)
                  inputAuthor.setAttribute("placeholder", "Author name")
                  inputAuthor.setAttribute("id", "inputAuthor")
                  containerUpdate.appendChild(inputAuthor)




                  let inputTitle = document.createElement("input");
                    inputTitle.setAttribute("class", "inputTitle  in")
                    inputTitle.setAttribute("placeholder", "Title")
                    // inputTitle.setAttribute("value", $scope.notes[key].title)
                    inputTitle.setAttribute("type", "text")
                    inputTitle.setAttribute("id", "inputTitle")
                    containerUpdate.appendChild(inputTitle)


                    let description = document.createElement("textarea");
                      description.setAttribute("class", "description  in")
                      description.setAttribute("cols", "32")
                      description.setAttribute("rows", "5")
                      description.setAttribute("placeholder", "Description")
                      description.setAttribute("type", "text")
                      description.setAttribute("id", "description")
                      containerUpdate.appendChild(description)







                  let buttonUpdate = document.createElement("button");
                    buttonUpdate.setAttribute("class", "buttonUpdate btn--add minmin in")
                    buttonUpdate.textContent = "Add"
                    buttonUpdate.setAttribute("id", "buttonUpdate")
                    containerUpdate.appendChild(buttonUpdate)




                document.body.appendChild(containerUpdate);



                let windowsUpdate = withId("containerUpdate")
                let closeUpdateWindow = withId("containerRemove")

                closeUpdateWindow.addEventListener("click", ()=>{
                    windowsUpdate.remove();
                },false)



                let auth =withId("inputAuthor")
                let titl =withId("inputTitle")
                let descr = withId("description")



                let buttonUpd = withId("buttonUpdate")

                buttonUpd.addEventListener("click", function(){

                  let wU = withId("containerUpdate")


                    setTimeout(()=>{
                      wU.remove();
                      // $scope.showMax = 1;
                      $scope.$apply();

                    },100)
                    $scope.newNote= {
                        author: auth.value,
                        title: titl.value,
                        noteNotes: descr.value,
                        minutes: $scope.date.minute,
                        hours: $scope.date.hour
                      }

                      $scope.notes.push($scope.newNote);
                      $scope.$apply()
                      console.log($scope.notes)
                      $scope.addNew = 1;
                    setTimeout(()=>{

                        $scope.addNew = 0;
                        $scope.$apply();
                    },3000)



                }, false);






  }
}])
