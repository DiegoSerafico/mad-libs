$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const sillyWordInput = $("input#silly-word").val();
    const numberInput= $("input#number").val();
    const adjective1Input = $("input#adjective1").val();
    const noun1Input = $("input#noun1").val();
    const adjective2Input = $("input#adjective2").val();
    const relativeInput = $("input#relative").val();
    const adjective3Input = $("input#adjective3").val();
    const verbInput = $("input#verb").val();
    const adjective4Input = $("input#adjective4").val();
    const adjective5Input = $("input#adjective5").val();

    const fields = [person1Input, sillyWordInput, numberInput, adjective1Input, noun1Input, adjective2Input, relativeInput, adjective3Input, verbInput, adjective4Input, adjective5Input];

    let i = 0;
    fields.forEach(function (field) {
      i++;
      $(".span" + i).text(field);
    });

    // $(".person1").text(person1Input);
    // $(".silly-word").text(sillyWordInput);
    // $(".number").text(numberInput);
    // $(".adjective1").text(adjective1Input);
    // $(".noun1").text(noun1Input);
    // $(".adjective2").text(adjective2Input);
    // $(".relative").text(relativeInput);
    // $(".adjective3").text(adjective3Input);
    // $(".verb").text(verbInput);
    // $(".adjective4").text(adjective4Input);
    // $(".adjective5").text(adjective5Input);

    $("#story").show();

    event.preventDefault();
  });
});