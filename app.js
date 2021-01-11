import InputComponent from "./components/InputComponent.js";
import ProfileManager from "./components/ProfileManager.js"
import StatisticData from "./components/StatisticData.js";
import PersonalStatistic from "./components/PersonalStatistic.js";
import UserAvatar from "./components/UserAvatar.js";
import AvatarWrapper from "./components/AvatarWrapper.js";


$("#input-avatar").change(function() {
    var inputAvatar1 = $("#input-avatar").val();
    console.log(inputAvatar1);
    $("#avatar").src = inputAvatar1;
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

