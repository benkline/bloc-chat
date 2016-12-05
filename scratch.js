// push a new room onto the array
<form ng-submit="addRoom">
  <input ng-model="newRoomTitle" />
  <button type="submit">Add Room</button>
</form>

<br>

<ul class="rooms-list-items">
   <li ng-repeat="room in home.rooms track by $index">
   // edit a room

     <input ng-model="room.title" ng-change="home.rooms.$save(room)" />
     <!-- delete a room -->
     <button ng-click="home.rooms.$remove(room)">Delete room</button>
   </li>
 </ul>
