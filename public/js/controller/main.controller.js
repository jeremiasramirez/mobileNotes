app.controller("main", ["$scope", function($scope){



  $scope.showMax = 0;
  $scope.showMoreDescription = false;
  $scope.searchNote='';

  let dat = new Date();
  $scope.date = {

    minute: dat.getMinutes(),
    hour:   dat.getHours()

  }

  $scope.showMore = function (){

      if ($scope.showMoreDescription == false){
        $scope.showMoreDescription = true;
      }
      else{
        $scope.showMoreDescription = false;
      }
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

  $scope.documentation = function(){

      let containerDocu = document.createElement("div");
        containerDocu.setAttribute("class", "containerDocu in")
        containerDocu.setAttribute("id", "containerDocu")

        let titleDocu = document.createElement("h1");
          titleDocu.setAttribute("class", "titleDocu text--orange in")
          titleDocu.textContent = "Documentation"
          titleDocu.setAttribute("id", "titleDocu")
          containerDocu.appendChild(titleDocu)

          let form = document.createElement("form");
            form.textContent = "Documentation"
            form.setAttribute("id", "form")
            form.setAttribute("class", "form")


            let inputForm = document.createElement("input");
              inputForm.textContent = "Documentation"
              inputForm.setAttribute("id", "inputForm")
              inputForm.setAttribute("placeholder", "Documentation")
              inputForm.setAttribute("class", "input")
                inputForm.setAttribute("type", "search")
            form.appendChild(inputForm)

            containerDocu.appendChild(form)

        let text1Docu = document.createElement("p");
          text1Docu.setAttribute("class", "text1Docu text--white in")
          text1Docu.textContent = "1. swipe a la derecha para actualizar nota."
          text1Docu.setAttribute("id", "text1Docu")
          containerDocu.appendChild(text1Docu)

          let textDocu2 = document.createElement("p");
            textDocu2.setAttribute("class", "textDocu2 text--white in")
            textDocu2.textContent = "2. swipe a la izquierda para eliminar la nota."
            textDocu2.setAttribute("id", "textDocu2")
            containerDocu.appendChild(textDocu2)



         let close = document.createElement("span");
           close.setAttribute("class", "fas fa-times closeUpdate")
           close.setAttribute("id", "close")



           let closeContainer = document.createElement("span");
             closeContainer.setAttribute("class", "closeUpdate")
             closeContainer.setAttribute("id", "close")
             closeContainer.appendChild(close)
             containerDocu.appendChild(closeContainer)
        document.body.appendChild(containerDocu)


        let windows = withId("containerDocu")
        let clos = withId("close")

        clos.addEventListener("click", function(){
          windows.remove()
        })


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
                  description.setAttribute("cols", "34")
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
                      description.setAttribute("cols", "34")
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
