<<<<<<< HEAD
package iii.servletjsp;

import java.util.Arrays;
import java.util.TimeZone;

public class ShowTimeZonelds {

	public static void main(String[] args) {
		String[] sa = TimeZone.getAvailableIDs();
		Arrays.parallelSort(sa);
		for(String s : sa) {
			System.out.println(s);
		}
	}

}
=======
package iii.servletjsp;

import java.util.Arrays;
import java.util.TimeZone;

public class ShowTimeZonelds {

	public static void main(String[] args) {
		String[] sa = TimeZone.getAvailableIDs();
		Arrays.parallelSort(sa);
		for(String s : sa) {
			System.out.println(s);
		}
	}

}
>>>>>>> e165f8b181f654b3f1f877bad3e0056d4aa52509
